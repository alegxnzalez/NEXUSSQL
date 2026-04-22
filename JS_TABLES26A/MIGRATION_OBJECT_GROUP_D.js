// MIGRATION_OBJECT_GROUP_D.js

window.MIGRATION_OBJECT_GROUP_D = {
  "tables": {
    "MIGRATION_OBJECT_GROUP_D": {
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
        "PROJECT_GROUP_D_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "PROJECT_GROUP_SEQ_NO": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "MIGRATION_OBJECT_GROUP"
},
        "OBJECT_PK": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "FAILURE_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DIAG_PROCESS_FAILURE_REASON"
}
      },
      "fk_tables": []
    }
  }
};