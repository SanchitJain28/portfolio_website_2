import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="bg-black text-white flex flex-col text-center h-40 footer">
        <p className=''>You can contact me at</p>
        <div className="icons">
        <a  href="resume.pdf" download="sanchit_jain_resume"> <i class="fa-solid fa-file fa-2xl"></i> </a> 
        <a href="https://wa.me/+919650296375"><i class="fa-brands fa-whatsapp fa-2xl"></i></a>
        <a href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
        <a href="https://github.com/SanchitJain28"><i class="fa-brands fa-github fa-2xl"></i></a>
        <a href="https://www.linkedin.com/in/sanchit-jain-a6741a2bb/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
        </div>
    </div>
    </>
  )
}
