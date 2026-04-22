// CM_ENDING_EXCLUSION_REGION.js

window.CM_ENDING_EXCLUSION_REGION = {
  "tables": {
    "CM_ENDING_EXCLUSION_REGION": {
      "description": "Specifies regions where a continuous move cannot terminate.",
      "columns": {
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_OFFERING",
          "info": "The GID for the rate offering."
},
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REGION",
          "info": "The GID for the region."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};