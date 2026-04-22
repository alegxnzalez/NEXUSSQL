// AUTO_GRANTEE.js

window.AUTO_GRANTEE = {
  "tables": {
    "AUTO_GRANTEE": {
      "description": "This table lets you specify that a given domain should be automatically granted access to a given table set in any new domains that are subsequently created.",
      "columns": {
        "GRANTEE_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "TABLE_SET": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
},
        "IS_WRITE_ACCESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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