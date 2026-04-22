// LANE_SUMMARY.js

window.LANE_SUMMARY = {
  "tables": {
    "LANE_SUMMARY": {
      "columns": {
        "LANE_SUMMARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LANE_SUMMARY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "BEGIN_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "When building the lane summary, only shipments whose start date is greater than begin_date are considered "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "When building the lane summary, only shipments whose start date is less than end_date are considered "
        },
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SAVED_QUERY",
          "info": "In addition to using begin_date, end_date, etc, you may specify an arbitrary saved query to indicate arbitrarily complex shipment filtering "
        },
        "TIME_PERIOD_SIZE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Defines the width of each time period in days.  The number of time periods is than determined by the begin_date and end_date.  Example: begin_date = 1/1/2005, end_date=12/31/2005.  Time_period_size = 7.  In this case, there would be 52 time periods "
        },
        "BEST_SRC_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "Defines the best source geography - this is used when its necessary to generate a lane in procurement - see requirements doc for more information "
        },
        "BEST_DST_GEO_HIERARCHY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GEO_HIERARCHY",
          "info": "Defines the best dest geography - this is used when its necessary to generate a lane in procurement - see requirements doc for more information "
        },
        "FIRST_TIME_PERIOD": {
          "type": "NUMBER()",
          "nullable": false
        },
        "SHIPMENT_SET_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
        },
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE"
        },
        "SERVPROV_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV_PROFILE"
        },
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE"
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
        "BID_BY_EQUIPMENT_GROUP": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If set to \"Y\", user can Bid by Equipment Group. Only used for TL Shipment Type. "
        },
        "BID_BY_ERU": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If set to \"Y\", user can Bid by Equipment Reference Unit."
        }
      },
      "fk_tables": [
        "LANE_SUMMARY_SHIP_SET_JOIN",
        "LANE_SUMMARY_STAT",
        "P_PROJECT"
      ]
    }
  }
};
