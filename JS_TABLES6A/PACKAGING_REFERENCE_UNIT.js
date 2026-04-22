// PACKAGING_REFERENCE_UNIT.js

window.PACKAGING_REFERENCE_UNIT = {
  "tables": {
    "PACKAGING_REFERENCE_UNIT": {
      "columns": {
        "PACKAGING_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PACKAGING_REFERENCE_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "PACKAGING_REFERENCE_UNIT_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
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
        },
        "APPLICATION_RULE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "SAME",
            "LIKE",
            "MIXED"
          ]
        },
        "GROUPING_RULE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "SAME",
            "LIKE"
          ]
        }
      },
      "fk_tables": [
        "LOCATION_THU_PRU_CAPACITY",
        "OB_LINE_PRU_DETAIL",
        "OR_LINE_PRU_DETAIL",
        "PRU_CAPACITY",
        "PRU_USAGE"
      ]
    }
  }
};
