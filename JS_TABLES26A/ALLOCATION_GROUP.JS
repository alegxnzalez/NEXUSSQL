// ALLOCATION_GROUP.js

window.ALLOCATION_GROUP = {
  "tables": {
    "ALLOCATION_GROUP": {
      "columns": {
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
},
        "ALLOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ALLOCATION_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
}
      },
      "fk_tables": [
        "CAPACITY_COMMITMENT_ALLOC",
        "LEG",
        "ORDER_RELEASE"
]
    }
  }
};