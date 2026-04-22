// HAZMAT_EDE_MAPPING.js

window.HAZMAT_EDE_MAPPING = {
  "tables": {
    "HAZMAT_EDE_MAPPING": {
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
        "HAZMAT_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "HAZMAT_ITEM",
          "info": "This column would store the Hazmat Item ID which has to be mapped to a Hazmat Type based on the EDE"
},
        "EDE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "This column would specify the EDE Type for which this mapping is done."
},
        "HAZMAT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "This column would store the Hazmat Type that will be sent to EDE."
},
        "HAZMAT_EDE_MAPPING_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
}
      },
      "fk_tables": []
    }
  }
};