// OR_EQUIPMENT_SEAL.js

window.OR_EQUIPMENT_SEAL = {
  "tables": {
    "OR_EQUIPMENT_SEAL": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OR_EQUIPMENT",
          "info": "The GID for the order release."
},
        "OR_EQUIPMENT_SEQ": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OR_EQUIPMENT",
          "info": "The equipment demand specified on the order release sequence key identifier."
},
        "SEAL_SEQUENCE": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "The seal sequence to allow for multiple seals to be defined."
},
        "SEAL_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The equipment seal number for the order release ordered equipment."
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