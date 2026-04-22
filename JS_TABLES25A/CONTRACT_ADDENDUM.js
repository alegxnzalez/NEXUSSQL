// CONTRACT_ADDENDUM.js

window.CONTRACT_ADDENDUM = {
  "tables": {
    "CONTRACT_ADDENDUM": {
      "columns": {
        "LANE_ID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "SCAC": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ORIGIN_ZIP": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ORIGIN_CITY": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "ORIGIN_STATE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "DESTINATION_DC": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "COST_PER_MILE": {
          "type": "VARCHAR2(7)",
          "nullable": true
        },
        "PCT_LOADS_COMITTED": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TRANSIT_DAYS": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TRAILER_TYPE": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        }
      },
      "fk_tables": []
    }
  }
};
