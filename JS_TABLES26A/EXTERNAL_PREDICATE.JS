// EXTERNAL_PREDICATE.js

window.EXTERNAL_PREDICATE = {
  "tables": {
    "EXTERNAL_PREDICATE": {
      "columns": {
        "VPD_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VPD_PROFILE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "TABLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
},
        "IS_WRITE_ACCESS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true
},
        "PREDICATE": {
          "type": "VARCHAR2(2000)",
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
        "OWNER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Indicates that the table shown in table_name belongs to OTM or FTI. It wil be considered as OTM if owner is null."
}
      },
      "fk_tables": []
    }
  }
};