// OB_SU_CONTENT_REFNUM.js

window.OB_SU_CONTENT_REFNUM = {
  "tables": {
    "OB_SU_CONTENT_REFNUM": {
      "columns": {
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT_CONTENT",
          "info": "The GID for the order base content line associated with the reference number."
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT_CONTENT",
          "info": "The sequence number (key) for the reference."
},
        "OB_SU_CONTENT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SU_CONTENT_REFNUM_QUAL",
          "info": "The reference number qualifier GID defining the reference code."
},
        "OB_SU_CONTENT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The text associated to the reference code."
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