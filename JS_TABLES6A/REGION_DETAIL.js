// REGION_DETAIL.js

window.REGION_DETAIL = {
  "tables": {
    "REGION_DETAIL": {
      "columns": {
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REGION",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SEQUENCE_NUM": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "A unique identifier to define the locations withing GC3. The gid contains the domain portion. "
        },
        "CITY": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "POSTAL_CODE": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ZONE1": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ZONE2": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "ZONE3": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "LOW_RANGE_HNAME_COMPONENT": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "LOW_RANGE_VALUE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "HIGH_RANGE_HNAME_COMPONENT": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "HIGH_RANGE_VALUE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GEO_HIERARCHY",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SPLC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPLC",
          "info": "The Standard Point Location Code for this Region. "
        },
        "RAIL_STATION_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STATION_CODE",
          "info": "The Rail Station Code for this Region."
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
