// POSTAL_CODE_VALIDATE.js

window.POSTAL_CODE_VALIDATE = {
  "tables": {
    "POSTAL_CODE_VALIDATE": {
      "columns": {
        "POSTAL_CODE_VALIDATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique identifier for the record"
},
        "POSTAL_CODE_VALIDATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for the record"
},
        "COUNTRY_CODE": {
          "type": "VARCHAR2(3)",
          "nullable": false,
          "info": "Country code"
},
        "CITY": {
          "type": "VARCHAR2(70)",
          "nullable": false,
          "info": "City.  This can be the correct city name, or can be a typo (corrected city would then be looked up through the UP_CORRECT field)."
},
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "POSTAL_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "Postal Code"
},
        "UP_CORRECT": {
          "type": "VARCHAR2(70)",
          "nullable": false,
          "info": "Corrected city in all caps."
},
        "DN_CORRECT": {
          "type": "VARCHAR2(70)",
          "nullable": true,
          "info": "Corrected city in mixed case."
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
      "fk_tables": []
    }
  }
};