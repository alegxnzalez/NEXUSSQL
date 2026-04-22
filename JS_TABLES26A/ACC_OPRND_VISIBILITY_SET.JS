// ACC_OPRND_VISIBILITY_SET.js

window.ACC_OPRND_VISIBILITY_SET = {
  "tables": {
    "ACC_OPRND_VISIBILITY_SET": {
      "description": "This table stores information about the accessorial operand visibility set, which defines the restricted set of RBI when creating accessorial costs.",
      "columns": {
        "ACC_OPRND_VISIBILITY_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global unique identifier for the set of RBI to be visible for accessorial costs."
},
        "ACC_OPRND_VISIBILITY_SET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Records additional information about the set of RBI to be visible for accessorial costs."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "ACC_OPRND_VISIBILITY_SET_D"
]
    }
  }
};