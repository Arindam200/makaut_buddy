import {useState , useRef , useEffect} from "react";
import axios from "axios";


export default function UplaodComponent({setStartUpload}){
    
    const cloudName = NEXT_PUBLIC_CLOUD_NAME; // replace with your own cloud name
    const uploadPreset = NEXT_PUBLIC_UPLOAD_PRESET; // replace with your own upload preset
    const [secureUrl , setSecureUrl] = useState(null);
    const [error , setError] = useState(null);
    const [successMessage , setSuccessMessage] = useState(null);

    const semRef = useRef();
    const subjectRef = useRef();
    const headingRef = useRef();
    const descriptionRef = useRef();
    const linkRef = useRef();
    const urlRef = useRef();
    
    //activeTab can be "notes" , "video" , "pyq"
    const [activeTab , setActiveTab] = useState("notes");

    const activeTabStyle = {
        backgroundColor: "#cacaca",
        borderRadius: "5px"
    }

    useEffect(() => {

        setError(null);
        setSuccessMessage(null);

    } , [activeTab])

    useEffect(() => {
        setError(null);
    } , [successMessage])

    useEffect(() => {

        setSuccessMessage(null);
        
    } , [error])


    function uploadResource(sem , sub , heading , desc , link , type){
        axios.post(`https://makaut-buddy-back-end.iamsagar762.workers.dev/createResource` , 
            
            JSON.stringify({
                sem : sem,
                subject : sub,
                type : type,
                heading : heading,
                description : desc ,
                link : link   
            })
            ,
            {
                
                headers : {
                "access-control-request-method": "POST",
                "Authorization" : process.env.NEXT_PUBLIC_API_SECRET
                },
            }
        )
      .then(function (response) {
        // handle success
        console.log(response.data);
        if(response.status === 200){
            setSuccessMessage("resource uploaded successfully")
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setError("some error occured");
      })
    }

    const myWidget = cloudinary.createUploadWidget(
        {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
        },
        (error, result) => {
            if (!error && result && result.event === "success") {
                console.log(result.info);
                setSecureUrl(result.info.secure_url);
                setError(null);
            }else if(error){
                setError(error);
            }
        }
    );
    
    
    let counter = 0 ;

    const semesters= new Array(8).fill(0).map(() => {

        counter = counter + 1
        return <option key={counter} value={counter}>Semester {counter}</option>

    })
    
    return (
        <section className="w-[50%] h-[90%] bg-white rounded-md z-30 ">
            <section className="w-[100%] text-black flex flex-row">
                <section className="w-[33%] flex justify-center p-[10px]" style={activeTab === "video" ? activeTabStyle : {}} onClick={() => {setActiveTab("video")}}>Youtube vid </section>
                <section className="w-[33%] flex justify-center p-[10px]" style={activeTab === "notes" ? activeTabStyle : {}} onClick={() => {setActiveTab("notes")}}>Handwritten Notes</section>
                <section className="w-[33%] flex justify-center p-[10px]" style={activeTab === "pyq" ? activeTabStyle : {}} onClick={() => {setActiveTab("pyq")}}>PYQ</section>
            </section>
            <section className="text-black flex flex-col items-center gap-4 z-[100] mt-[30px]">
                        

                        <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">
                            
                            <label htmlFor="sem" className="text-[13px] pt-[0px] h-[10%]">Select Semester* </label>         
                            <select name="sem" id="sem" ref={semRef} className="text-black bg-white pt-[10px]  h-[90%]">
                                {
                                    ...semesters
                                }               
                            </select>
                       
                        </section>

                        <section className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]" >

                            <label htmlFor="subject"  className="text-[13px] pt-[0px] h-[10%]" >Enter Subject*</label>
                            <input type="text" ref={subjectRef} placeholder="subject" id="subject" className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]" /> 

                        </section>

                        <section  className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]" >
                            <label htmlFor="heading"  className="text-[13px] pt-[0px] h-[10%]" >Enter Heading * </label>
                            <input type="text" ref={headingRef} placeholder="heading" id="heading" className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]"/>
                        </section>

                        <section  className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">

                            <label htmlFor="description" className="text-[13px] pt-[0px] h-[10%]" >Enter Description * </label>
                            <input type="text" ref={descriptionRef} placeholder="description" id="description" className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]" />

                        </section>
                        
                        
                        {
                            activeTab === "video" ? 

                            <section  className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">

                                <label htmlFor="link" className="text-[13px] pt-[0px] h-[10%]" >Enter Link * </label>
                                <input type="text" ref={linkRef} placeholder="link" id="link" className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]" />
                            
                            </section> 

                            :

                            null
                        }

                           {
                            activeTab === "notes" || activeTab === "pyq" ? 
                            
                                <button className="border border-[#959597] p-[10px] text-[14px] text-[#black] min-w-[150px] max-w-[200px] rounded-md" onClick={() => {
                                    
                                    if(semRef.current.value && subjectRef.current.value && headingRef.current.value && descriptionRef.current.value) {
                                        myWidget.open();
                                    }else{
                                        setError("please fill in the above fields first ");
                                    }
                                                                
                                }}>
                                    Upload a file
                                </button>  

                            : 

                            null
                            }

                            {secureUrl ? 

                                <section  className="flex flex-col border border-[#959597] px-[10px] pb-[10px] pt-[3px] w-[80%] rounded-md hover:border-[#000000]">

                                    <label htmlFor="link" className="text-[13px] pt-[0px] h-[10%]" >Secure Url * </label>
                                    <input type="text" ref={urlRef} value={secureUrl} placeholder="link" id="link" className="text-black appearance-none outline-none bg-white pt-[10px] focus:ring-0 border-0 h-[90%]" readOnly/>
                                
                                </section>
                                
                                : 

                                null 
                            }
                            <section className="flex gap-4 text-[15px]">

                            <button className="bg-[#121212] p-[10px] text-[#e3e4ea] min-w-[200px] max-w-[300px] rounded-md"
                                onClick={() => {
                                    if( semRef.current.value && subjectRef.current.value && headingRef.current.value && descriptionRef.current.value && (linkRef.current?.value || urlRef.current?.value)){

                                        switch (activeTab){
                                            case "notes" || "pyq" :
                                                uploadResource(semRef.current.value , subjectRef.current.value , headingRef.current.value , descriptionRef.current.value , urlRef.current.value , activeTab);
                                                break;
                                            case "video" :
                                                uploadResource(semRef.current.value , subjectRef.current.value , headingRef.current.value , descriptionRef.current.value , linkRef.current.value , activeTab);
                                                break;
                                        }   
    
                                    }else{
                                        setError("please fill in the above fields first")
                                    }
                                }}
                            >
                                Upload Resource
                            </button>
                            
                            <button className="bg-[#121212] p-[10px] text-[#e3e4ea] min-w-[200px] max-w-[300px] rounded-md"
                                onClick={() => {
                                    setStartUpload((val) => false);
                                }}
                            >Close</button>
                            
                            </section>
                            {
                                error ? 

                               <span className=" text-[#ff3b6b] mt-[10px] p-[10px] bg-[white] rounded-md ">! {error}</span>  

                                : 

                                null
                            }

                            {
                                successMessage ? 

                                <span className=" text-[#3cd93c] mt-[10px] p-[10px] bg-[white] rounded-md "> :{`)`} {successMessage}</span>

                                : 

                                null
                            }
                </section> 
                            
        </section>
    )
}
