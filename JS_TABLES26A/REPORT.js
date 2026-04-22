// REPORT.js

window.REPORT = {
  "tables": {
    "REPORT": {
      "description": "The REPORT table contains the list of standard and customized reports.  One record per report.",
      "columns": {
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global indetifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "REPORT_DESC": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Report description."
},
        "REPORT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REPORT_GROUP",
          "info": "GC3 Global indetifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
},
        "REPORT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique indetifier for the entity. Is used for creating the GID"
},
        "REPORT_DISPLAY_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The name of the report that will appear in the GC3 application."
},
        "REPORT_PHYSICAL_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "The actual file name of the report."
},
        "SELECT_VIA_UI": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "ADDITIONAL_URL_ARGUMENTS": {
          "type": "VARCHAR2(300)",
          "nullable": true,
          "info": "Contains any additional URL arguments that should be called when the report is called within the GC3 application."
},
        "CAN_AUTO_GENERATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Specifies if the report can be included in a report set.  Generally only the reports that take a shipment_gid or order_base_gid as its parameter may only be set for auto generation."
},
        "SECURITY_LEVEL": {
          "type": "NUMBER",
          "nullable": true,
          "info": "If a value is present, it specifies the security level when sending the report.  If no value is present, the default is taken from the properties file."
},
        "REPORT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "IS_RPT_MGR_DISPLAY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag that defines whether this report will appear on the Report Manager screen or not.  Valid values are Y and N."
},
        "USE_HTML_PARAMFORM": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "DEFAULT_DESFORMAT": {
          "type": "VARCHAR2(1)",
          "nullable": false
},
        "REPORT_FROM_DB": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Default database name on which the report should be run."
},
        "ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "APP_ACTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_ACTION"
},
        "TRANSACTIONAL_EVENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "TRANSACTIONAL_EVENT"
},
        "SEED_DATA": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Specifies if the Report is a seed data."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the id of the user who first entered the record."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "For audit trail purposes. This field stores the date and time when the record was first entered in the database."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the id of the user who last updated the record."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "For audit trail purposes. This field stores the date and time when the record was updated in the database."
},
        "USE_PARAMS_AS_BIND": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to determine whether to build the report parameters into valid SQL value(s) to be used as bind values or to use the finder string value(s)."
},
        "THIRD_PARTY_CONTENT_TYPE": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "values": [
                    "EMBEDDED",
                    "LINK",
                    "BROWSER ONLY",
                    "NONE"
          ],
          "info": "Type of support for 3rd party report generation"
},
        "USE_THIRD_PARTY_DISTRIBUTION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag to control whether a 3rd party is responsible for report distribution"
},
        "IS_CONSOLIDATED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "REPORT_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "REPORT_SYSTEM",
          "info": "Report System generating the report. If left blank, embedded BI Publisher is used."
},
        "REPORT_PATH": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "The path of the report. Report systems use this path, along with a path prefix to determine which report to generate."
},
        "USE_PARAM_OPERATORS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Flag specifying whether finder operators should be used for report parameters. Note that this is independent of use_params_as_bind. That flag determines whether the report parses whatever arguments it receives and uses bind variables for queries. You can have a report that uses bind variables and finder operators, or one that uses concatenation without operators."
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "Data query type associated with the report. Used for optional document storage."
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "BULK_REPORTING",
        "DOCUMENT",
        "DOCUMENT_DEF",
        "DOCUMENT_DEF_OWNER_DETAILS",
        "IPP_PRINTER_REP",
        "REPORT_ADDL_PARAMETER",
        "REPORT_CONTROL",
        "REPORT_EMAIL",
        "REPORT_LOG",
        "REPORT_PARAMETER",
        "REPORT_PRINT",
        "REPORT_RESTRICT_FROM_LEVEL",
        "REPORT_SET_DETAIL",
        "REPORT_TEXT_TEMPLATE",
        "USER_WS_REPORT_ACCESS"
]
    }
  }
};