import {
    LeftMenuInterface,
    ListSearchTableItem,
    MockUserFilterProp,
} from "src/Core";
import { MockUser } from "src/Domain/Model/MockUser";

export function GetBreadCrumbArray(
    items: LeftMenuInterface[],
    targetPath: string
): LeftMenuInterface[] {
    // FOUND ITEMs
    const path: LeftMenuInterface[] = [];

    // CONVERT TARGET PATH FROM STRING TO ARRAY
    const pathArray = targetPath.split("/");

    // FIND
    items.forEach((item) => {
        if (pathArray.includes(item.key.toLowerCase())) {
            path.push(item);
        }

        if (item?.subList) {
            const subListPath = GetBreadCrumbArray(item?.subList, targetPath);
            path.push(...subListPath);
        }
    });

    return path;
}

export function GetMenuItemByKey(
    key: string,
    menuItems: LeftMenuInterface[]
): LeftMenuInterface | undefined {
    // FIND LEVEL 1
    const foundItem = menuItems.find(
        (item) => item.key.toLowerCase() === key.toLowerCase()
    );
    if (foundItem) {
        return foundItem;
    }

    // FIND IN SUBLIST
    for (const item of menuItems) {
        if (item?.subList) {
            const foundItem = GetMenuItemByKey(key, item.subList);
            if (foundItem) {
                return foundItem;
            }
        }
    }

    return undefined;
}

// Hàm lọc hàng theo collectionId
export function filterByCollectionId(
    items: ListSearchTableItem[],
    collectionId: string
): ListSearchTableItem[] {
    return collectionId
        ? items.filter((item) => item.collectionId === collectionId)
        : items;
}

// Hàm lọc hàng theo collectionName
export function filterByCollectionName(
    items: ListSearchTableItem[],
    collectionName: string
): ListSearchTableItem[] {
    return collectionName
        ? items.filter((item) =>
              item.collectionName
                  .toLowerCase()
                  .includes(collectionName.toLowerCase())
          )
        : items;
}

// Hàm lọc hàng theo contentGenre
export function filterByContentGenre(
    items: ListSearchTableItem[],
    contentGenres: string[]
): ListSearchTableItem[] {
    return contentGenres.length > 0
        ? items.filter((item) => contentGenres.includes(item.contentGenre))
        : items;
}

// Hàm lọc hàng theo filterMethod
export function filterByFilterMethod(
    items: ListSearchTableItem[],
    filterMethods: string[]
): ListSearchTableItem[] {
    return filterMethods.length > 0
        ? items.filter((item) => filterMethods.includes(item.filterMethod))
        : items;
}

// Hàm lọc hàng theo status
export function filterByStatus(
    items: ListSearchTableItem[],
    statuses: string[]
): ListSearchTableItem[] {
    return statuses.length > 0
        ? items.filter((item) => statuses.includes(item.status))
        : items;
}

// Hàm lọc hàng theo creationTime
export function filterByCreationTime(
    items: ListSearchTableItem[],
    startDate: string,
    endDate: string
): ListSearchTableItem[] {
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();

    return startTime && endTime
        ? items.filter((item) => {
              const creationTime = new Date(item.creationTime).getTime();
              return creationTime >= startTime && creationTime <= endTime;
          })
        : items;
}

// MOCK USER FILTER
export function mockUserFilter(
    items: MockUser[],
    filterData: MockUserFilterProp
): MockUser[] {
    return filterData.searchValue
        ? items.filter((item) => {
              const isId =
                  item.id &&
                  item.id
                      .toString()
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isUsername =
                  item.user_name &&
                  item.user_name
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isEmail =
                  item.email &&
                  item.email
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isStatus =
                  item.status_label.text &&
                  item.status_label.text
                      .toLowerCase()
                      .includes(filterData.searchValue.toLowerCase());
              const isInGroup =
                  item.group_list.length > 0 &&
                  item.group_list.some((group) =>
                      group.name
                          .toLowerCase()
                          .includes(filterData.searchValue.toLowerCase())
                  );

              return isId || isEmail || isInGroup || isStatus || isUsername;
          })
        : items;
}

// export function mockUserFilterById(
//     items: MockUser[],
//     id: number | undefined
// ): MockUser[] {
//     return id ? items.filter((item) => item.id == id) : items;
// }

// export function mockUserFilterByUsername(
//     items: MockUser[],
//     user_name: string
// ): MockUser[] {
//     return user_name
//         ? items.filter((item) =>
//               item.user_name.toLowerCase().includes(user_name)
//           )
//         : items;
// }

// export function mockUserFilterByEmail(
//     items: MockUser[],
//     email: string
// ): MockUser[] {
//     return email
//         ? items.filter((item) => item.email.toLowerCase().includes(email))
//         : items;
// }

// export function mockUserFilterByStatus(
//     items: MockUser[],
//     status: string
// ): MockUser[] {
//     return status
//         ? items.filter((item) =>
//               item.status_label.value.toLowerCase().includes(status)
//           )
//         : items;
// }

// export function mockUserFilterByGroupList(
//     items: MockUser[],
//     group_ids: number[]
// ): MockUser[] {
//     return group_ids.length > 0
//         ? items.filter((item) =>
//               item.group_list.some((group) => group_ids.includes(group.id))
//           )
//         : items;
// }
