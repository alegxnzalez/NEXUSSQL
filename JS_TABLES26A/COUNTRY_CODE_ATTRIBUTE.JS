// COUNTRY_CODE_ATTRIBUTE.js

window.COUNTRY_CODE_ATTRIBUTE = {
  "tables": {
    "COUNTRY_CODE_ATTRIBUTE": {
      "description": "This table will be used to store attribute value pairs for a particular country",
      "columns": {
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "Country Code Gid"
},
        "COUNTRY_CODE_ATTRIBUTE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Country attribute"
},
        "COUNTRY_CODE_ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Country attribute value"
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