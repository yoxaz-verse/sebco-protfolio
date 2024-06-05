"use client";

import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  Spacer,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect } from "react";
import { Textarea } from "@nextui-org/react";



export function PopUp(props) {
  const { type, title, inputFields, modelData } = props;
  const [isLoading, setLoading] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleAdd = (data) => {
    alert("Going to add data");
    if (modelData) {
      const resp = uploadData(data, props.title, modelData.id);
      resp.then((res) => {
        if (res.message === "success") {
          // update or add the response to the cache

          // queryClient.setQueryData([props.title], (old) => {
          //   return {
          //     data: [...old?.data, res.data],
          //   };
          // }); remove res.data from queryClient
          queryClient.refetchQueries([props.title]);
          // queryClient.resetQueries([props.title]);

          // close the modal by setting close handler to false

          alert("Edited Successfully");
          setLoading(false);
        } else {
          alert("Edited Failed");
          setLoading(false);
        }
      });
    } else {
      const resp = uploadData(data, props.title);
      resp.then((res) => {
        if (res.message === "success") {
          // update or add the response to the cache

          queryClient.setQueryData([props.title], (old) => {
            return {
              data: [...old?.data, res.data],
            };
          });
          // close the modal by setting close handler to false
          alert("Added Successfully");

          setLoading(false);
        } else {
          alert("Adding Failed");

          setLoading(false);
        }
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (type === "delete") {
      const resp = deleteData(`/${props.title}/${modelData.id}`);
      resp.then((res) => {
        if (res.message === "success") {
          // update or add the response to the cache
          queryClient.refetchQueries([props.title]);
          // queryClient.resetQueries([props.title]);
          console.log("Deleted Successfully");
          setLoading(false);
        } else {
          toaster.danger(props.title + " Deleting Failed");
          setLoading(false);
        }
      });
      return;
    }

    let formData = {};
    inputFields.forEach((field) => {
      if (field.type === "image") {
        // handle image file upload
        const file = e.target[field.label].files[0];
        alert("You are uploading ");
        alert(file);
        if (file) {
          // upload logic here
          // you might need to wait for the file to be uploaded and get the URL
          // for simplicity, I'm directly assigning the file object
          // formData[field.label] = file;
          // need to add alt with it
          formData[field.label] = {
            src: file,
            alt: e.target[field.label + "alt"].value,
          };

          console.log("single");
          console.log(formData[field.label]);
        }
      } else if (field.type === "multiImage") {
        // handle image file upload
        const files = e.target[field.label].files;
        if (files) {
          // upload logic here
          // you might need to wait for the file to be uploaded and get the URL
          // for simplicity, I'm directly assigning the file object
          // formData[field.label] = file;
          // need to add alt with it
          formData[field.label] = [];
          for (let i = 0; i < files.length; i++) {
            formData[field.label].push({
              src: files[i],
              alt: "image" + i,
            });
          }
          console.log("multi");
          console.log(formData[field.label]);
        }
      } else if (field.type === "file") {
        // handle other file uploads
        const file = e.target[field.label].files[0];
        if (file) {
          // upload logic here
          // you might need to wait for the file to be uploaded and get the URL
          // for simplicity, I'm directly assigning the file object
          formData[field.label] = file;
        }
      } else {
        // handle other input types
        formData[field.label] = e.target[field.label].value;
      }
    });

    console.log(formData);

    // Assuming uploadImage handles the uploading of images
    // and returns the URL or some identifier
    if (
      Object.keys(formData).filter((key) => key.includes("image")).length > 0
    ) {
      for (const [key, value] of Object.entries(formData)) {
        if (key.includes("image")) {
          const uploadResponse = await uploadImage(value.src, props.title);
          if (uploadResponse.message === "success") {
            formData[key] = {
              src: uploadResponse.data,
              alt: value.alt,
            };
            console.log("Image uploaded successfully");
          } else {
            setLoading(false);
            return false;
          }
        } else if (key.includes("multiImage")) {
          const uploadResponse = await uploadImage(value[0].src, props.title);
          if (uploadResponse.message === "success") {
            formData[key][0] = {
              src: uploadResponse.data,
              alt: value[0].alt,
            };
            console.log("Image uploaded successfully");
            alert("Image uploading Success");
          } else {
            alert("Image uploading failed");
            setLoading(false);
            return false;
          }
        } else if (key.includes("file")) {
          const uploadResponse = await uploadImage(value.src, props.title);
          if (uploadResponse.message === "success") {
            formData[key] = uploadResponse.data;
            console.log("File uploaded successfully");
          } else {
            setLoading(false);
            return false;
          }
        }
      }
      console.log(formData);

      handleAdd(formData);
    } else {
      handleAdd(formData);
    }
  };

  return (
    <Modal
      closeButton
      preventDefault
      preventClose
      blur
      aria-labelledby="modal-title"
      isOpen={props.visible}
      onOpenChange={onOpenChange}
      onClose={props.closeHandler}
    >
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>
            <h5 id="modal-title">
              {type.charAt(0).toUpperCase() + type.slice(1)}
              <span> {title.charAt(0).toUpperCase() + title.slice(1)}</span>
            </h5>
          </ModalHeader>
          <ModalBody>
            {type === "edit" || type === "add" ? (
              <>
                {inputFields.map((item, index) => (
                  <>
                    {!item.options ? (
                      item.type === "text" ||
                        item.type === "email" ||
                        item.type === "number" ? (
                        <Input
                          key={index}
                          color="primary"
                          size="lg"
                          type={item.type}
                          name={item.label}
                          placeholder={item.label}
                          initialValue={modelData ? modelData[item.label] : ""}
                        />
                      ) : item.type === "textarea" ? (
                        <Textarea
                          key={index}
                          bordered
                          name={item.label}
                          placeholder={item.label}
                          initialValue={modelData ? modelData[item.label] : ""}
                        />
                      ) : item.type === "image" ? (
                        <>
                          {modelData && modelData[item.label]?.src && (
                            <Image
                              src={modelData ? modelData[item.label].src : ""}
                              width={100}
                              height={100}
                              alt={
                                modelData ? modelData[item.label].alt : "logo"
                              }
                            />
                          )}{" "}
                          <input
                            type="file"
                            name={item.label}
                            onChange={props.onChange}
                          />
                          <input
                            type="text"
                            placeholder="alt tag"
                            name={item.label + "alt"}
                            defaultValue={
                              modelData ? modelData[item.label]?.alt : ""
                            }
                          />
                        </>
                      ) : item.type === "multiImage" ? (
                        <>
                          {modelData &&
                            modelData[item.label] &&
                            modelData[item.label].length > 0 &&
                            modelData[item.label]?.map((image, index) => (
                              <>
                                <Image
                                  key={index}
                                  src={image.src}
                                  width={100}
                                  height={100}
                                  alt={image.alt || "logo"}
                                />
                              </>
                            ))}
                          <input
                            type="file"
                            name={item.label}
                            multiple
                            onChange={props.onChange}
                          />
                        </>
                      ) : item.type === "file" ? (
                        <input
                          type="file"
                          name="file"
                          onChange={props.onChange}
                        />
                      ) : null
                    ) : item.type === "select" ? (
                      <Dropdown
                        key={index}
                        name={item.label}
                        placeholder="Select an option"
                        initialValue={modelData ? modelData[item.label] : ""}
                        options={item.options}
                        onChange={(value) => console.log(value)}
                      />
                    ) : item.type === "radio" ? (
                      <RadioGroup
                        name={item.label}
                        size="sm"
                        label={"Select " + item.label}
                        defaultValue={modelData ? modelData[item.label] : ""}
                      >
                        {item.options.map((option, index) => (
                          <Radio key={index} value={option.value}>
                            {option.label}
                          </Radio>
                        ))}
                      </RadioGroup>
                    ) : item.type === "check" ? (
                      <CheckboxGroup
                        name={item.label}
                        defaultValue={modelData ? modelData[item.label] : ""}
                        color="secondary"
                        label={"Select " + item.label}
                      >
                        {item.options.map((option, index) => (
                          <Checkbox key={index} value={option.value}>
                            {option.label}
                          </Checkbox>
                        ))}
                      </CheckboxGroup>
                    ) : null}
                  </>
                ))}
              </>
            ) : type === "view" ? (
              <>
                {modelData &&
                  Object.keys(modelData).map((item, index) => (
                    <Card key={index} variant="flat">
                      <CardBody>
                        <h6
                          size={14}
                          h6
                          css={{
                            margin: "0",
                          }}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </h6>
                        {typeof modelData[item] === "object" ? (
                          modelData[item].length > 0 ? (
                            modelData[item].map((image, index) => (
                              <>
                                <Image
                                  key={index}
                                  src={image.src}
                                  width={100}
                                  height={100}
                                  alt={image.alt || "logo"}
                                />
                                <h5
                                  size={10}
                                  css={{
                                    margin: "0",
                                  }}
                                >
                                  {image.alt}
                                </h5>
                              </>
                            ))
                          ) : (
                            <>
                              <Spacer y={1.5} />
                              <Image
                                src={modelData[item].src}
                                width={100}
                                height={100}
                                alt={modelData[item].alt || "logo"}
                              />
                              <h6
                                size={10}
                                css={{
                                  margin: "0",
                                }}
                              >
                                {modelData[item].alt}
                              </h6>
                            </>
                          )
                        ) : (
                          <h6
                            size={16}
                            css={{
                              margin: "0",
                            }}
                          >
                            {modelData[item]}
                          </h6>
                        )}
                      </CardBody>
                    </Card>
                  ))}
              </>
            ) : (
              <h6>Are you sure you want to delete?</h6>
            )}
          </ModalBody>
          <ModalFooter>
            <Button auto flat color="error" onPress={props.closeHandler}>
              Close
            </Button>
            {type !== "view" && (
              <Button
                auto
                color={type === "delete" ? "danger" : "primary"}
                onPress={props.closeHandler}
                type="submit"
              >
                {type === "delete" ? "Delete" : "Save"}{" "}
                {title.charAt(0).toUpperCase() + title.slice(1)}
              </Button>
            )}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export function DynamicTable(props) {
  const [modelVar, setModelVar] = React.useState({
    type: "edit",
  });

  const { data: tableValues, status } = useQuery({
    queryKey: [props.title],
    queryFn: () => getAllData(props.title),
    options: {
      staleTime: 10000 * 60,
    },
  });
  console.log(tableValues);

  return (
    <section
      style={{
        margin: "5%",
        minWidth: "90vw",
        marginTop: "10px",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <h6 className="font-medium text-[32px]">
        {" "}
        {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
      </h6>
      <h6 className="font-regular text-[18px]">
        List details regarding {props.title}.{" "}
      </h6>
      <Spacer y={1} />

      <Button
        auto
        flat
        size="sm"
        color="primary"
        onPress={() => {
          props.setVisible(true);
          setModelVar({
            type: "add",
          });
        }}
      >
        Add {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
      </Button>
      <Spacer y={4} />
      <Table
        aria-label="Example static bordered collection table"
        // allowDuplicateSelectionEvents="false"
        isHeaderSticky
        bottomContent={
          <div className="flex w-full justify-center">
            {/* <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        // page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      /> */}
          </div>
        }
        classNames={{
          base: "max-h-[340px] overflow-scroll",
        }}
      >
        <TableHeader>
          <TableColumn>Index</TableColumn>
          {props.inputFields.map((header, index) => (
            <TableColumn key={index}>
              {header.label.charAt(0).toUpperCase() + header.label.slice(1)}
            </TableColumn>
          ))}
          <TableColumn>Action</TableColumn>
        </TableHeader>
        {(() => {
          switch (status) {
            case "error":
              return (
                <TableBody
                  emptyContent={`  Error Fetching ${props.title} ...`}
                ></TableBody>
              );

            default:
              return (
                <TableBody
                  isLoading={status === "pending"}
                  loadingContent={<Spinner label="Loading..." />}
                  emptyContent={`No ${props.title} Data`}
                >
                  {tableValues &&
                    Array.isArray(tableValues.data) &&
                    tableValues.data.map((rowData, index) => (
                      <TableRow key={index}>
                        <TableCell key={index}>{index + 1}</TableCell>

                        {/* map only value equal to tableHeader */}
                        {props.inputFields.map((header, innerIndex) => {
                          return (
                            <TableCell
                              key={innerIndex}
                              css={{
                                maxWidth: "100px",
                                flexWrap: "wrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {header.type === "image" &&
                                rowData[header.label] ? (
                                <div
                                  style={{
                                    display: "flex",
                                    maxWidth: "100px",
                                    flexWrap: "wrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Image
                                    src={
                                      rowData[header.label].src || "/vercel.svg"
                                    }
                                    width={100}
                                    height={100}
                                    alt={rowData[header.label].alt || "logo"}
                                  />
                                  <div>
                                    <Spacer y={0.2} />

                                    {rowData[header.label].alt}
                                  </div>
                                </div>
                              ) : header.type === "multiImage" &&
                                rowData[header.label] &&
                                rowData[header.label].length > 0 ? (
                                <div className="flex">
                                  <div key={index}>
                                    <Image
                                      // src={rowData[header.label][0].src} rewrite in correct format
                                      src={rowData[header.label][0].src}
                                      width={100}
                                      height={100}
                                      alt={"logo"}
                                    />
                                  </div>
                                </div>
                              ) : typeof rowData[header.label] ===
                                "object" ? null : (
                                rowData[header.label]
                              )}
                            </TableCell>
                          );
                        })}

                        <TableCell>
                          <div className="flex justify-center items-center">
                            <div
                              css={{
                                d: "flex",
                                cursor: "pointer",
                              }}
                            >
                              <MdViewInAr
                                onClick={() => {
                                  props.setVisible(true);
                                  setModelVar({
                                    type: "view",
                                    data: rowData,
                                  });
                                }}
                              />
                            </div>
                            <div
                              css={{
                                d: "flex",
                                cursor: "pointer",
                              }}
                            >
                              <TbEdit
                                onClick={() => {
                                  props.setVisible(true);
                                  setModelVar({
                                    type: "edit",
                                    data: rowData,
                                  });
                                }}
                              />
                            </div>
                            <div
                              css={{
                                d: "flex",
                                cursor: "pointer",
                              }}
                            >
                              <MdOutlineDelete
                                onClick={() => {
                                  props.setVisible(true);
                                  setModelVar({
                                    type: "delete",
                                    data: rowData,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              );
          }
        })()}
      </Table>
      <PopUp
        title={props.title}
        visible={props.visible}
        inputFields={props.inputFields}
        type={modelVar.type}
        modelData={modelVar.data}
        closeHandler={props.closeHandler}
      />
    </section>
  );
}