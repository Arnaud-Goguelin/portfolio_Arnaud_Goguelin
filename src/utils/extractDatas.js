export function extractDatas(Datas, prop) {
    const unusableDatas = Datas.map((data) => data[prop]);
    const datasWithDuplicates = unusableDatas.reduce((acc, prop) => {
        return acc.concat(prop)
    })
    return datasWithDuplicates
}