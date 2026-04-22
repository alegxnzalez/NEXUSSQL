// GTM_TL_ADDITIONAL_INFO.js

window.GTM_TL_ADDITIONAL_INFO = {
  "tables": {
    "GTM_TL_ADDITIONAL_INFO": {
      "description": "the table stores addition infos that added against declaration line",
      "columns": {
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
},
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM declaration line."
},
        "GTM_ADDITIONAL_INFO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_ADDITIONAL_INFO",
          "info": "The GID for the GTM additional information."
},
        "TEXT_OVERRIDE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Text specified in this field will override the default text defined in the GTM additional information."
},
        "EXPORT_FROM": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "Country or region from which the goods are being exported."
}
      },
      "fk_tables": []
    }
  }
};