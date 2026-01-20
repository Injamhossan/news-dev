/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactCompiler: true,
images : {
  remotePatterns : [
    {
      protocol:"https",
      hostname: "assets.bwbx.io"
    }
  ]
}

};

export default nextConfig;
