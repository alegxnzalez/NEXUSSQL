// MIGRATION_OBJECT_GROUP.js

window.MIGRATION_OBJECT_GROUP = {
  "tables": {
    "MIGRATION_OBJECT_GROUP": {
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
        "PROJECT_GROUP_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "PROJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "MIGRATION_PROJECT"
},
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FINDER_SET"
},
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "PROCESS_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true
},
        "TRANSACTION_CODE": {
          "type": "VARCHAR2(2)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "IS_REFRESH_CACHE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_RAISE_LIFETIME_EVENT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "This column would store the saved query gid  when object selection is through saved query"
},
        "OBJECT_COUNT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This column would store the number of objects inside an object group"
}
      },
      "fk_tables": [
        "MIGRATION_OBJECT_GROUP_D"
]
    }
  }
};