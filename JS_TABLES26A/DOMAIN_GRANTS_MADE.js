// DOMAIN_GRANTS_MADE.js

window.DOMAIN_GRANTS_MADE = {
  "tables": {
    "DOMAIN_GRANTS_MADE": {
      "description": "This table contains the list of domains a shipper/domain grants access to for viewing or updating the information. The flag is_write_access specifies if the grantee has update access.",
      "columns": {
        "GRANTOR_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "GRANTEE_DOMAIN": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "TABLE_SET": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "TABLE_SET"
},
        "IS_WRITE_ACCESS": {
          "type": "VARCHAR2(1)",
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