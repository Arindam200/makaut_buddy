import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";

export default function List({subject , input}) {
    console.log(subject)
    console.log(input);
 
    return (
    <ListboxWrapper>
      <section className="max-h-[150px] overflow-scroll overscroll-y-auto">
        <Listbox
            aria-label="Actions"
            onAction={(key) => alert(key)}
        >
            {
                subject.filter((eachSubjectElement) => eachSubjectElement.value.toLowerCase().includes(String(input).toLowerCase()) ).map((eachSubjectElement) => {
                    return  (<ListboxItem key={eachSubjectElement.label}>{eachSubjectElement.value}</ListboxItem>)
                })
            }
        </Listbox>
      </section>
    </ListboxWrapper>
  );
}
