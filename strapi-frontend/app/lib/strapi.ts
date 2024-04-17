"use server";

const BearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzEzMTczMTE3LCJleHAiOjE3MTU3NjUxMTd9.USSdKA-9MMprnX-oYzpCz83WlxHPLpnBIKGji16CvWU";

// menus api data
export const getAllMenusData = async () => {
    try {
        let sidebarMenuData = await fetch("http://localhost:1337/api/menus?nested&populate=*", {
            headers: {
                "Authorization": `Bearer ${BearerToken}`,
            },
            cache: "no-store"
        });
        sidebarMenuData = await sidebarMenuData.json();
        return sidebarMenuData;
    } catch (err) {
        throw new Error("Error came while fetching menus data");
    }
}

// custom modules get api data
export const getAllModulesData = async (routeParams: any) => {
    let errorMsg = "Error came while fetching modules data";
    try {
        let data: any = await fetch(`http://localhost:1337/api/${routeParams}`, {
            headers: {
                "Authorization": `Bearer ${BearerToken}`,
            }
        });
        data = await data.json();
        // console.log("FOR PAGE NOT FOUND ERROR = ", data);
        if (data?.error?.name === "NotFoundError") {
            errorMsg = "404 Page Not Found";
            throw new Error(errorMsg);
        }
        data = data?.data?.map((item: any) => {
            const { attributes, ...rest } = item;
            const { createdAt, updatedAt, publishedAt, ...attributesWithoutTimestamps } = attributes;
            return { ...rest, attributes: attributesWithoutTimestamps };
        });
        return data;  
    } catch (err) {
        throw new Error(errorMsg);
    }
};

export const getDynamicForm = async (uri: any) => {
    try {
        let dynamicFieldsData = await fetch(`http://localhost:1337/api/content-type-builder/content-types/api::${uri}.${uri}`, {
            headers: {
                "Authorization": `Bearer ${BearerToken}`,
            },
            cache: "no-store"
        });
        dynamicFieldsData = await dynamicFieldsData.json();
        return dynamicFieldsData;
    } catch (err) {
        throw new Error("Error came while fetching menus data");
    }
}


// export const getDynamicForm = async (uidx: any) => {
//     try {
//         let labelField = await fetch(`http://localhost:1337/content-manager/content-types/${uidx}/configuration`, {
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMDg4NzcyLCJleHAiOjE3MTM2ODA3NzJ9.YaTeOI9TTO7OaeF-sXoJuGNA1BM79NXOt9DifSVgpog"
//             }
//         });
//         labelField = await labelField.json();

//         let inputValidation = await fetch(`http://localhost:1337/content-type-builder/content-types/${uidx}`, {
//             headers: {
//                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMDg4NzcyLCJleHAiOjE3MTM2ODA3NzJ9.YaTeOI9TTO7OaeF-sXoJuGNA1BM79NXOt9DifSVgpog"
//             }
//         });
//         inputValidation = await inputValidation.json();

//         console.log("kkkkkkkkkkkkkkk", uidx);
        
//         const labelAttributes = inputValidation.data.schema.attributes;
//         console.log("ccccccccccccc", labelAttributes);

//         const data = {
//             uid: inputValidation.data.uid,
//             apiID: inputValidation.data.apiID,
//             formFields: Object.keys(labelAttributes).map(key => {
//                 const attribute = labelAttributes[key];
//                 const metadata = labelField.data.contentType.metadatas[key];
            
//                 return {
//                     name: key,
//                     type: attribute.type,
//                     required: attribute.required || false,
//                     maxLength: attribute.maxLength || null,
//                     minLength: attribute.minLength || null,
//                     label: metadata.edit.label,
//                     description: metadata.edit.description || "",
//                     placeholder: metadata.edit.placeholder || "",
//                     visible: metadata.edit.visible || false,
//                     editable: metadata.edit.editable || false
//                 };
//             })
//         }

//         return data;    
//     } catch (err) {
//         throw new Error("Error came while fetching dynamic form data");
//     }
// }