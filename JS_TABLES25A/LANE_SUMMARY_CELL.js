// LANE_SUMMARY_CELL.js

window.LANE_SUMMARY_CELL = {
  "tables": {
    "LANE_SUMMARY_CELL": {
      "columns": {
        "LANE_SUMMARY_CELL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LANE_SUMMARY_CELL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "LANE_SUMMARY_STAT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LANE_SUMMARY_STAT"
        },
        "TIME_PERIOD_NUM": {
          "type": "NUMBER(8)",
          "nullable": false,
          "info": "The number of the time period: 1, 2, 3, ... "
        },
        "SHIPMENT_COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The number of shipments that fall into this time period "
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The start date for this time period "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The end date for this time period. Ex: for 1 week time periods, the start_date and end_date will be 7 days apart for each time period"
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
        "LANE_SUMMARY_CELL_D"
      ]
    }
  }
};
