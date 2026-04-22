// LOCATION_BOV.js

window.LOCATION_BOV = {
  "tables": {
    "LOCATION_BOV": {
      "columns": {
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "LOCATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOCATION_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true
        },
        "CORPORATION_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ADDRESS_LINE1": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "ADDRESS_LINE2": {
          "type": "VARCHAR2(240)",
          "nullable": true
        },
        "ADDRESS_LINES": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "CITY": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "PROVINCE": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
        },
        "POSTAL_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
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
        "ZONE4": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "TIME_ZONE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LAT": {
          "type": "NUMBER(10,5)",
          "nullable": true
        },
        "LON": {
          "type": "NUMBER(10,5)",
          "nullable": true
        },
        "SOURCING_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DELIVERY_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOCATION_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "IS_TEMPORARY": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "IS_MAKE_APPT_BEFORE_PLAN": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "RATE_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SCAC_CODE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
