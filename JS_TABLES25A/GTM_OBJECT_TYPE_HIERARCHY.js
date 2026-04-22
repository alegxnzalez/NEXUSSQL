// GTM_OBJECT_TYPE_HIERARCHY.js

window.GTM_OBJECT_TYPE_HIERARCHY = {
  "tables": {
    "GTM_OBJECT_TYPE_HIERARCHY": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
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
        "GTM_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_OBJECT_TYPE",
          "info": "Object Type Gid. "
        },
        "GTM_PARENT_OBJECT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_OBJECT_TYPE",
          "info": "Parent of the Object Type Gid (ex: Transaction is the parent of Transaction Line) "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the OTM Release version"
        }
      },
      "fk_tables": []
    }
  }
};
