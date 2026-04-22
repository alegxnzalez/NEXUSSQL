// PERF_METRIC_COMPONENT.js

window.PERF_METRIC_COMPONENT = {
  "tables": {
    "PERF_METRIC_COMPONENT": {
      "description": "A high level component holding comparable metrics. E.g., Event Queues",
      "columns": {
        "PERF_METRIC_COMPONENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Metric Component ID"
},
        "PERF_METRIC_COMPONENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LABEL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translatable component label"
},
        "DESCRIPTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSLATION",
          "info": "Translatable component description"
},
        "IS_COLLECTING": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, metrics collection for this component is enabled; otherwise, metrics are not collected."
},
        "IS_POLLING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, the component represents a set of polled metrics, collected at recurring points within the hour."
},
        "POLLING_FREQUENCY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Frequency of polled metrics. If null, the metrics are only polled at collection."
},
        "POLLING_FREQUENCY_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "POLLING_FREQUENCY_BASE": {
          "type": "NUMBER",
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
},
        "FORCE_COLLECT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, users cannot turn off the metric component (though individual metric types may be turned off)."
}
      },
      "fk_tables": [
        "PERF_METRIC_TYPE"
]
    }
  }
};