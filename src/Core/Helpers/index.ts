import { LeftMenuInterface, ListSearchTableItem } from "src/Core";

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
