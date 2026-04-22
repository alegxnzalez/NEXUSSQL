// REPORT_SYSTEM.js

window.REPORT_SYSTEM = {
  "tables": {
    "REPORT_SYSTEM": {
      "columns": {
        "REPORT_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Report System ID "
        },
        "REPORT_SYSTEM_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Report System XID "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "REPORT_SYSTEM_TYPE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
            "BIP",
            "HTTP"
          ],
          "info": "Report System domain "
        },
        "BIP_HOST": {
          "type": "VARCHAR2(400)",
          "nullable": true,
          "info": "Host name for remote BI Publisher server "
        },
        "BIP_PORT": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Port number for remote BI Publisher server. Defaults to 9704 if left blank. "
        },
        "BIP_USER": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "BI Publisher user "
        },
        "BIP_PASSWORD": {
          "type": "VARCHAR2(200)",
          "nullable": true,
          "info": "BI Publisher password "
        },
        "REPORT_PATH_PREFIX": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Optional path prefix for remote reports. The REPORT.REPORT_PATH field is concatenated to the report path prefix to determine the full path name of the remote report. "
        },
        "HTTP_URL": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "For external system supporting a simple HTTP request (i.e. not BI Publisher), the URL for the report. The URL should have a {report} macro that will be replaced with the full report path request. "
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
        "PROTOCOL": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The protocol we want to use to connect to BI Publisher"
        }
      },
      "fk_tables": [
        "IPP_PRINTER",
        "REPORT"
      ]
    }
  }
};
