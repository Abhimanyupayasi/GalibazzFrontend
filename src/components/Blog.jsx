import React from 'react'
import GaliBazz from './GaliBazz'

function Blog() {
  return (
    <div>
      <div className='pt-10 bg-[#1F2937]'>
      <GaliBazz/>
      </div>
      

      <div className='flex w-full  items-center justify-center bg-[#1F2937]'>

      <div className="mockup-code mt-10 mb-10">
      <pre data-prefix="1"><code>We are developing the blog website</code></pre>
<pre data-prefix="2"><code>We are working quickly to get things up and running.</code></pre>
<pre data-prefix="3" className="bg-warning text-warning-content"><code>Error! Thank you for visiting us. We'll be up and running soon.</code></pre>

</div>
      
      </div>
      
      
    </div>
  )
}

export default Blog