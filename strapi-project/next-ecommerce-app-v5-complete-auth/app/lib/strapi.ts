"use server";

export const getAllModulesData = async (moduleName: any) => {
    try {
        let data = await fetch(`http://localhost:1337/api/${moduleName}`, {
            // headers: {
            //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMDg4NzcyLCJleHAiOjE3MTM2ODA3NzJ9.YaTeOI9TTO7OaeF-sXoJuGNA1BM79NXOt9DifSVgpog"
            // }
        })
        data = await data.json();
        return data;  
    } catch (err) {
        throw new Error("Error came while fetching modules data");
    }
}

export const getSidebarMenu = async () => {
    try {
        let sidebarMenuData = await fetch("http://localhost:1337/menus?nested&populate=*", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMDg4NzcyLCJleHAiOjE3MTM2ODA3NzJ9.YaTeOI9TTO7OaeF-sXoJuGNA1BM79NXOt9DifSVgpog"
            }
        })
        sidebarMenuData = await sidebarMenuData.json();
        return sidebarMenuData;        
    } catch (err) {
        throw new Error("Error came while fetching menu data");
    }
}

export const getDynamicForm = async (uidx: any) => {
    try {
        let labelField = await fetch(`http://localhost:1337/content-manager/content-types/${uidx}/configuration`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMDg4NzcyLCJleHAiOjE3MTM2ODA3NzJ9.YaTeOI9TTO7OaeF-sXoJuGNA1BM79NXOt9DifSVgpog"
            }
        });
        labelField = await labelField.json();

        let inputValidation = await fetch(`http://localhost:1337/content-type-builder/content-types/${uidx}`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExMDg4NzcyLCJleHAiOjE3MTM2ODA3NzJ9.YaTeOI9TTO7OaeF-sXoJuGNA1BM79NXOt9DifSVgpog"
            }
        });
        inputValidation = await inputValidation.json();

        console.log("kkkkkkkkkkkkkkk", uidx);
        
        const labelAttributes = inputValidation.data.schema.attributes;
        console.log("ccccccccccccc", labelAttributes);

        const data = {
            uid: inputValidation.data.uid,
            apiID: inputValidation.data.apiID,
            formFields: Object.keys(labelAttributes).map(key => {
                const attribute = labelAttributes[key];
                const metadata = labelField.data.contentType.metadatas[key];
            
                return {
                    name: key,
                    type: attribute.type,
                    required: attribute.required || false,
                    maxLength: attribute.maxLength || null,
                    minLength: attribute.minLength || null,
                    label: metadata.edit.label,
                    description: metadata.edit.description || "",
                    placeholder: metadata.edit.placeholder || "",
                    visible: metadata.edit.visible || false,
                    editable: metadata.edit.editable || false
                };
            })
        }

        return data;    
    } catch (err) {
        throw new Error("Error came while fetching dynamic form data");
    }
}