import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="flex flex-col p-11 bg-slate-950 text-white justify-center">
      <div className="">
        <h3 className="text-base font-semibold leading-7 ">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 ">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">Full name</dt>
            <dd className="mt-1 text-sm leading-6   sm:col-span-2 sm:mt-0">Sanchit Jain</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">Application for</dt>
            <dd className="mt-1 text-sm leading-6   sm:col-span-2 sm:mt-0">Frontend developer & Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">Email address</dt>
            <dd className="mt-1 text-sm leading-6   sm:col-span-2 sm:mt-0">sanchitjain00028@gmail.com</dd>
          </div>
          {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6   sm:col-span-2 sm:mt-0">$120,000</dd>
          </div> */}
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">Phone No.</dt>
            <dd className="mt-1 text-sm leading-6   sm:col-span-2 sm:mt-0">9650296375</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">About</dt>
            <dd className="mt-1 text-sm leading-6   sm:col-span-2 sm:mt-0">
            Hi, I'm Sanchit Jain. I'm a freelancer who builds apps and websites for small clients and businesses. I know several technologies like React and Flutterflow. I'm a fast learner with a good grasp of web development concepts. I use tools like Flutterflow to build apps and integrate the front end with the backend using technologies like MySQL and Firebase.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6  ">Attachments</dt>
            <dd className="mt-2 text-sm   sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                {/* <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">sanchit_jain_resume.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">1mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="resume.pdf" download="sanchit_jain_resume">
                      Download
                    </a>
                  </div>
                </li>
               
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">My gitHub profile</span>
                      {/* <span className="flex-shrink-0 text-gray-400">1mb</span> */}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="https://github.com/SanchitJain28" download="sanchit_jain_resume">
                      VISIT PROFILE
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">My Linkedin profile</span>
                      {/* <span className="flex-shrink-0 text-gray-400">1mb</span> */}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href="https://www.linkedin.com/in/sanchit-jain-a6741a2bb/" download="sanchit_jain_resume">
                      VISIT PROFILE
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
