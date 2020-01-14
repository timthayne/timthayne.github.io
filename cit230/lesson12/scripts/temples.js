fetch('json/scratch.json')
    .then(
        (response) => response.json()
    )
    .then(
        (temples) => {
            temples.forEach(
                temple => {
                    console.log(temple.Name);
                }
            )
        }

    )


