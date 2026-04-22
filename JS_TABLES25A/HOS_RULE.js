// HOS_RULE.js

window.HOS_RULE = {
  "tables": {
    "HOS_RULE": {
      "columns": {
        "HOS_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "HOS_RULE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
        },
        "HOS_RULE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "HOS_RULE_TYPE"
        },
        "ACTIVITY_TIME": {
          "type": "NUMBER()",
          "nullable": false
        },
        "ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "ACTIVITY_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "HOS_ACTIVITY_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "D",
            "W",
            "A"
          ],
          "info": "Activity type corresponding to activity time is: D-drive, W-work, or R-rest. "
        },
        "IS_ACTIVITY_TIME_MAX": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y- Activity time is a maximum time.N- Activity time is a minimum. "
        },
        "MIN_REST_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_REST_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_REST_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ALLOW_REST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y - Rest duration will be inserted when max activity time is reached. N - If max activity time is exceeded, rule will be in violation.  No rest duration is inserted. "
        },
        "PERIOD_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "PERIOD_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "PERIOD_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_ROLLING_PERIOD": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "MIN_RESET_DURATION": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_RESET_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "MIN_RESET_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IS_ACTIVITY_TIME_CONTIGUOUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Only applicable if IS_ACTIVITY_TIME_MAX is 'N'. "
        },
        "IS_REST_TRIGGERED_BY_WORK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y- rest duration can be triggered during work activity or drive activity. N- rest duration can only be triggered during drive activity. "
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
        "MIN_RESET_SEPARATION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Minimum duration required between the start of two resets "
        },
        "MIN_RESET_SEPARATION_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "MIN_RESET_SEPARATION_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "RESET_START_WINDOW_BEGIN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Earliest time of day that counting can start for a reset break. Time is stored in milliseconds. "
        },
        "RESET_START_WINDOW_END": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Latest time of day that counting can start for a reset break. Time is stored in milliseconds. "
        },
        "CONSIDER_EARLY_REST": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "This field enables a layover to occur without completely expiring available activity time and without naturally encountering a wait time long enough to qualify as a layover."
        }
      },
      "fk_tables": [
        "DRIVER_HOS_RULE_STATE",
        "HOS_RULE_SET_D",
        "IE_HOS_RULE_STATE"
      ]
    }
  }
};
