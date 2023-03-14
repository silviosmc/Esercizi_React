import { useMemo } from "react"

export function FilteredList({list}) {
    const filteredList = useMemo(() => {
        return list.filter((item) => item.age > 18)
    }, [list])

    return (
        <ul>
          {filteredList.map((item) =>
            <li key={item.id}>
              {item.name} (age: {item.age})
            </li>
          )}
        </ul>
    )
}