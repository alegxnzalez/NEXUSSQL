// RESOURCE_SCHEDULE_PROFILE.js

window.RESOURCE_SCHEDULE_PROFILE = {
  "tables": {
    "RESOURCE_SCHEDULE_PROFILE": {
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
        "RESOURCE_SCHEDULE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "RESOURCE_SCHEDULE_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "RESOURCE_SCHEDULE_PROFILE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
}
      },
      "fk_tables": [
        "RESOURCE_SCHEDULE_PROFILE_D"
]
    }
  }
};