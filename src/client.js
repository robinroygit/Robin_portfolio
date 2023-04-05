import {createClient} from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"


export const client = createClient({
    projectId:process.env.REACT_APP_SANITY_PRODUCT_ID,
    dataset:'production',
    apiVersion:'2023-04-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source);