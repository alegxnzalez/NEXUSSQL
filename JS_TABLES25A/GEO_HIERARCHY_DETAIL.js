// GEO_HIERARCHY_DETAIL.js

window.GEO_HIERARCHY_DETAIL = {
  "tables": {
    "GEO_HIERARCHY_DETAIL": {
      "columns": {
        "GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "HNAME_COMPONENT_GID": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "HNAME_COMPONENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
        },
        "HLEVEL": {
          "type": "NUMBER(3)",
          "nullable": false
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
