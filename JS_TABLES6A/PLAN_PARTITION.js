// PLAN_PARTITION.js

window.PLAN_PARTITION = {
  "tables": {
    "PLAN_PARTITION": {
      "columns": {
        "PLAN_PARTITION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PLAN_PARTITION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "When run partition assignment process, all the orders defined by this saved query will be assigned the partition gid"
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
      "fk_tables": [
        "BULK_PLAN_PARTITION",
        "ORDER_RELEASE",
        "PARTITION_PROFILE_D"
      ]
    }
  }
};
