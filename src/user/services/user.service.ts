export const getUsers = async (): Promise<any> => {
    const url = 'http://localhost:4000/user/'
    try {
        const res = await fetch(url,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        return res.json()
    } catch (error) {
        console.log("Error loading products: ", error)
    }
}
export const removeUser = async ({id}: any) => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
         await fetch(`http://localhost:4000/user/${id}`, {
            method: "DELETE"
        })
    }
}