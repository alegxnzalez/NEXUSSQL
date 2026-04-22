// ROUTE_INSTANCE_LEG_STATUS.js

window.ROUTE_INSTANCE_LEG_STATUS = {
  "tables": {
    "ROUTE_INSTANCE_LEG_STATUS": {
      "columns": {
        "ROUTE_INSTANCE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ROUTE_INSTANCE_LEG",
          "info": "Part of PK.  FK for Route Instance Leg. "
        },
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_VALUE",
          "info": "Part of PK.  Part of FK for Status Value which also implies FK for Status Type. "
        },
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STATUS_VALUE",
          "info": "Part of FK for Status Value."
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
