// PERF_METRIC_TYPE.js

window.PERF_METRIC_TYPE = {
  "tables": {
    "PERF_METRIC_TYPE": {
      "columns": {
        "PERF_METRIC_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Metric Type ID "
        },
        "PERF_METRIC_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PERF_METRIC_COMPONENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PERF_METRIC_COMPONENT",
          "info": "Metric component "
        },
        "LABEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translatable type label "
        },
        "DESCRIPTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translatable type description "
        },
        "IS_COUNT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the metric type represents an object count during the time window (e.g. logging requests). Otherwise, it represents an average performance over the time window (e.g. average execution time). "
        },
        "PRECISION": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For non-count metric types, the floating point precision for output. "
        },
        "IS_COLLECTING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, metrics collection for this type is enabled; otherwise, metrics are not collected. "
        },
        "IS_TRACKING_MAX_CAUSE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the metric is tracking the cause of the maximum value in the dataset. "
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        },
        "MIN_THRESHOLD_COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The minimum number of data points for meaningful threshold analysis. "
        },
        "MIN_PERSIST_COUNT": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The minimum number of data points per hour before the metric persists into historical tables. "
        },
        "FORCE_COLLECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, users cannot turn off the metric."
        }
      },
      "fk_tables": [
        "PERFM_COLLECT_PROFT",
        "PERFM_THRESHOLD",
        "PERF_METRIC"
      ]
    }
  }
};
