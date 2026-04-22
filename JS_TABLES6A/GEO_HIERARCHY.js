// GEO_HIERARCHY.js

window.GEO_HIERARCHY = {
  "tables": {
    "GEO_HIERARCHY": {
      "columns": {
        "GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "GEO_HIERARCHY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "RANK": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID."
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
        "DISTANCE_EXTERNAL_GEO",
        "GEO_HIERARCHY_DETAIL",
        "GEO_HIERARCHY_PROFILE_D",
        "HNAME_SET_MEMBER",
        "IM_MILEAGE",
        "LANE_SUMMARY",
        "REGION_DETAIL",
        "X_LANE"
      ]
    }
  }
};
