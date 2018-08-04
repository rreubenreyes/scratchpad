function* gen(base, interval) {
    while(true) yield base += interval 
}

const users = {
    userList: [],
    _gen: gen(0, 1),
    validate: function(id, handleSuccess) {
        if (this.userList.some(user => user.id === id )) {
            handleSuccess()
        }
        else if (!this.userList.length) {
            console.log(`no users have been registered`)
        }
        else {
            console.log(`could not find user with id #${id}`)
        }
    },
    create: function(username) {
        if (typeof username === 'string') {
            this.userList.push({ 
                id: this._gen.next().value,
                username
            })
        }
        else {
            console.log(`provide a valid username`)
        }
    },
    delete: function(id) {
		this.validate(id, () => {
            const user = this.userList.filter(user => user.id === id )
            console.log(`deleting user: ${user[0].username}#${id}`)
            this.userList = this.userList.filter(user => user.id !== id) 
        })
    },
	find: function(id) {
        this.validate(id, () => {
            const user = this.userList.filter(user => user.id === id )
            console.table(...user)
        })
    },
    all: function() {
        this.userList.length ? console.table(this.userList) 
            : console.log('no users have been registered')
    }
}