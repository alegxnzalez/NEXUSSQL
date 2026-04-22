// LOCATION_CAPACITY_GROUP.js

window.LOCATION_CAPACITY_GROUP = {
  "tables": {
    "LOCATION_CAPACITY_GROUP": {
      "description": "This table specifies a group of location capacities to be used together and how they are triggered.",
      "columns": {
        "LOCATION_CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LOCATION_CAPACITY_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LOCATION_CAPACITY_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false
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
        "LOCATION_CAPACITY_GROUP_D",
        "LOCATION_CAPACITY_GROUP_JOIN"
]
    }
  }
};