import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = (props) => {
  return (
    <div className='bg-slate-200 h-30 w-48 py-1 my-3 rounded-xl'>
    <Disclosure>
    {({ open }) => (
      <>
      <Disclosure.Button className="py-2 flex items-center gap-3">
      {open ? <BiChevronUp /> : <BiChevronDown />}

       <span className={open ? "text-red-600" : "text-gray-700"}>
        {props.title}
       </span>

      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        <div className="flex item-center gap-3 flex-wrap">
         {props.tags.map((tag) => (
           <>
            <div className="bg-red-600 border-2 border-red-600 p-2 m-1">
            <span className="text-black">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
    </div>
  );
};

export default PlaysFilter;