
import { Select, SelectItem } from '@nextui-org/react';

export default function SubjectDropDown({showSubjectsDropDown  , subject , placement , getData}){
    return (
         
    
            <div className="flex flex-col gap-2">
              {showSubjectsDropDown.show ? 
              <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
                <Select
                  key={placement}
                  labelPlacement={placement}
                  placeholder="Choose your subject"
                  className="max-w-xs"
                >
                  {subject.filter((subject) => subject.sem === showSubjectsDropDown.sem).map((subject) => (
                    <SelectItem
                      key={subject.value}
                      value={subject.value}
                      onClick={() => getData.setSub(subject.value)}
                    >
                      {subject.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              : null }
            </div> 
            
    )
}