"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'tradelocker/1.5.2 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get user details.
     *
     * @throws FetchError<400, types.UsersControllerGetUserDetailsResponse400>
     * @throws FetchError<403, types.UsersControllerGetUserDetailsResponse403>
     * @throws FetchError<404, types.UsersControllerGetUserDetailsResponse404>
     */
    SDK.prototype.usersController_getUserDetails = function (body) {
        return this.core.fetch('/brand-api/v1/users/details', 'post', body);
    };
    /**
     * Check if user email already exists.
     *
     * @throws FetchError<400, types.UsersControllerGetUsersByEmailResponse400>
     * @throws FetchError<403, types.UsersControllerGetUsersByEmailResponse403>
     * @throws FetchError<404, types.UsersControllerGetUsersByEmailResponse404>
     */
    SDK.prototype.usersController_getUsersByEmail = function (body) {
        return this.core.fetch('/brand-api/v1/users/check-by-email', 'post', body);
    };
    /**
     * Get details for all users.
     * Offset and limit are optional parameters.
     *
     * @throws FetchError<400, types.UsersControllerGetUsersByBrandIdResponse400>
     * @throws FetchError<403, types.UsersControllerGetUsersByBrandIdResponse403>
     */
    SDK.prototype.usersController_getUsersByBrandId = function (body) {
        return this.core.fetch('/brand-api/v1/users/all', 'post', body);
    };
    /**
     * Create a user in TradeLocker system.
     *
     * @throws FetchError<400, types.UsersControllerCreateUserResponse400>
     * @throws FetchError<403, types.UsersControllerCreateUserResponse403>
     */
    SDK.prototype.usersController_createUser = function (body, metadata) {
        return this.core.fetch('/brand-api/v1/users/create', 'post', body, metadata);
    };
    /**
     * Set new password for selected user Id.
     *
     * @throws FetchError<400, types.UsersControllerSetPasswordResponse400>
     * @throws FetchError<403, types.UsersControllerSetPasswordResponse403>
     * @throws FetchError<404, types.UsersControllerSetPasswordResponse404>
     */
    SDK.prototype.usersController_setPassword = function (body) {
        return this.core.fetch('/brand-api/v1/users/set-password', 'post', body);
    };
    /**
     * Set new email for selected user Id.
     *
     * @throws FetchError<400, types.UsersControllerSetEmailResponse400>
     * @throws FetchError<403, types.UsersControllerSetEmailResponse403>
     * @throws FetchError<404, types.UsersControllerSetEmailResponse404>
     */
    SDK.prototype.usersController_setEmail = function (body) {
        return this.core.fetch('/brand-api/v1/users/set-email', 'post', body);
    };
    /**
     * Get all accounts for a user.
     *
     * @throws FetchError<400, types.AccountControllerGetAccountsResponse400>
     * @throws FetchError<403, types.AccountControllerGetAccountsResponse403>
     */
    SDK.prototype.accountController_getAccounts = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/all', 'post', body);
    };
    /**
     * Get single account details.
     *
     * @throws FetchError<400, types.AccountControllerGetAccountDetailsResponse400>
     * @throws FetchError<403, types.AccountControllerGetAccountDetailsResponse403>
     */
    SDK.prototype.accountController_getAccountDetails = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/details', 'post', body);
    };
    /**
     * Get all accounts for a brand.
     * Offset and limit are optional parameters.
     *
     * @throws FetchError<400, types.AccountControllerGetAllAccountsForBrandResponse400>
     * @throws FetchError<403, types.AccountControllerGetAllAccountsForBrandResponse403>
     */
    SDK.prototype.accountController_getAllAccountsForBrand = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/brand', 'post', body);
    };
    /**
     * Create a new Tradelocker account for specified user.
     *
     * @throws FetchError<400, types.AccountControllerCreateAccountResponse400>
     * @throws FetchError<403, types.AccountControllerCreateAccountResponse403>
     */
    SDK.prototype.accountController_createAccount = function (body, metadata) {
        return this.core.fetch('/brand-api/v1/accounts/create', 'post', body, metadata);
    };
    /**
     * Activate an existing TradeLocker account.
     *
     * @throws FetchError<400, types.AccountControllerActivateAccountResponse400>
     * @throws FetchError<403, types.AccountControllerActivateAccountResponse403>
     */
    SDK.prototype.accountController_activateAccount = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/activate', 'put', body);
    };
    /**
     * Restricts an existing TradeLocker account. Restricted accounts cannot open positions.
     *
     * @throws FetchError<400, types.AccountControllerRestrictAccountResponse400>
     * @throws FetchError<403, types.AccountControllerRestrictAccountResponse403>
     */
    SDK.prototype.accountController_restrictAccount = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/restrict', 'put', body);
    };
    /**
     * Suspend an existing TradeLocker account. Trading is prohibited for suspended accounts
     * and they do not show up in the TradeLocker application.
     *
     * @throws FetchError<400, types.AccountControllerSuspendAccountResponse400>
     * @throws FetchError<403, types.AccountControllerSuspendAccountResponse403>
     */
    SDK.prototype.accountController_suspendAccount = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/suspend', 'put', body);
    };
    /**
     * Set new group for specified account.
     *
     * @throws FetchError<400, types.AccountControllerChangeUserGroupResponse400>
     * @throws FetchError<403, types.AccountControllerChangeUserGroupResponse403>
     */
    SDK.prototype.accountController_changeUserGroup = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/set-group', 'put', body);
    };
    /**
     * Order closing of all positions for specified account.
     *  After submitting a request, call open positions endpoint to ensure that all positions
     * were closed successfully.
     *
     * @throws FetchError<400, types.AccountControllerCloseAllPositionsResponse400>
     * @throws FetchError<403, types.AccountControllerCloseAllPositionsResponse403>
     * @throws FetchError<404, types.AccountControllerCloseAllPositionsResponse404>
     * @throws FetchError<500, types.AccountControllerCloseAllPositionsResponse500>
     */
    SDK.prototype.accountController_closeAllPositions = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/close-all-positions', 'post', body);
    };
    /**
     * Cancel all orders for specified account.
     *  After submitting a request, call all orders endpoint to ensure that all orders were
     * closed successfully.
     *
     * @throws FetchError<400, types.AccountControllerCancelAllOrdersResponse400>
     * @throws FetchError<403, types.AccountControllerCancelAllOrdersResponse403>
     * @throws FetchError<404, types.AccountControllerCancelAllOrdersResponse404>
     * @throws FetchError<500, types.AccountControllerCancelAllOrdersResponse500>
     */
    SDK.prototype.accountController_cancelAllOrders = function (body) {
        return this.core.fetch('/brand-api/v1/accounts/cancel-all-orders', 'post', body);
    };
    /**
     * Deposit funds to specified account of a user. The ID of the resulting operation is not
     * unique across account types (LIVE,DEMO).
     *
     * @throws FetchError<400, types.AccountOperationsControllerDepositToAccountResponse400>
     * @throws FetchError<403, types.AccountOperationsControllerDepositToAccountResponse403>
     */
    SDK.prototype.accountOperationsController_depositToAccount = function (body, metadata) {
        return this.core.fetch('/brand-api/v1/account-operations/deposit', 'post', body, metadata);
    };
    /**
     * Withdraw funds from specified account of a user. The ID of the resulting operation is
     * not unique across account types (LIVE,DEMO).
     *
     * @throws FetchError<400, types.AccountOperationsControllerWithdrawFromAccountResponse400>
     * @throws FetchError<403, types.AccountOperationsControllerWithdrawFromAccountResponse403>
     */
    SDK.prototype.accountOperationsController_withdrawFromAccount = function (body, metadata) {
        return this.core.fetch('/brand-api/v1/account-operations/withdraw', 'post', body, metadata);
    };
    /**
     * Add or remove credit to specified account of a user. The ID of the resulting operation
     * is not unique across account types (LIVE,DEMO).
     *
     * @throws FetchError<400, types.AccountOperationsControllerAddCreditToAccountResponse400>
     * @throws FetchError<403, types.AccountOperationsControllerAddCreditToAccountResponse403>
     */
    SDK.prototype.accountOperationsController_addCreditToAccount = function (body, metadata) {
        return this.core.fetch('/brand-api/v1/account-operations/credit', 'post', body, metadata);
    };
    /**
     * Default API route with basic service information.
     *
     */
    SDK.prototype.homeController_appInfo = function () {
        return this.core.fetch('/brand-api', 'get');
    };
    /**
     * API liveness check
     *
     */
    SDK.prototype.homeController_alive = function () {
        return this.core.fetch('/brand-api/alive', 'get');
    };
    /** @throws FetchError<503, types.HomeControllerReadonlyResponse503> The Health Check is not successful */
    SDK.prototype.homeController_readonly = function () {
        return this.core.fetch('/brand-api/ready', 'get');
    };
    /**
     * Get all instruments for account type.
     *
     * @throws FetchError<400, types.BrandControllerGetInstrumentsResponse400>
     * @throws FetchError<403, types.BrandControllerGetInstrumentsResponse403>
     * @throws FetchError<500, types.BrandControllerGetInstrumentsResponse500>
     */
    SDK.prototype.brandController_getInstruments = function (body) {
        return this.core.fetch('/brand-api/v1/brand/instruments', 'post', body);
    };
    /**
     * Get all assets for account type.
     *
     * @throws FetchError<400, types.BrandControllerGetAssetsResponse400>
     * @throws FetchError<403, types.BrandControllerGetAssetsResponse403>
     * @throws FetchError<500, types.BrandControllerGetAssetsResponse500>
     */
    SDK.prototype.brandController_getAssets = function (body) {
        return this.core.fetch('/brand-api/v1/brand/assets', 'post', body);
    };
    /**
     * Get all billable accounts for specified day. Each account will contain a list of events
     * that marks this account as active in a selected day.
     *
     * @throws FetchError<400, types.BrandControllerGetActiveAccountsByDayResponse400>
     * @throws FetchError<403, types.BrandControllerGetActiveAccountsByDayResponse403>
     * @throws FetchError<500, types.BrandControllerGetActiveAccountsByDayResponse500>
     */
    SDK.prototype.brandController_getActiveAccountsByDay = function (body) {
        return this.core.fetch('/brand-api/v1/brand/daily-active-accounts', 'post', body);
    };
    /**
     * Get all billable accounts for specified month. Each account will contain a list of
     * events that marks this account as active for the whole monthly period.
     *
     * @throws FetchError<400, types.BrandControllerGetActiveAccountsByMonthResponse400>
     * @throws FetchError<403, types.BrandControllerGetActiveAccountsByMonthResponse403>
     * @throws FetchError<500, types.BrandControllerGetActiveAccountsByMonthResponse500>
     */
    SDK.prototype.brandController_getActiveAccountsByMonth = function (body) {
        return this.core.fetch('/brand-api/v1/brand/monthly-active-accounts', 'post', body);
    };
    /**
     * Get all orders.
     *
     * @throws FetchError<400, types.OrdersControllerGetAllOrdersResponse400>
     * @throws FetchError<403, types.OrdersControllerGetAllOrdersResponse403>
     * @throws FetchError<500, types.OrdersControllerGetAllOrdersResponse500>
     */
    SDK.prototype.ordersController_getAllOrders = function (body) {
        return this.core.fetch('/brand-api/v1/orders/all', 'post', body);
    };
    /**
     * Cancel order.
     *
     * @throws FetchError<400, types.OrdersControllerCancelOrderResponse400>
     * @throws FetchError<403, types.OrdersControllerCancelOrderResponse403>
     * @throws FetchError<404, types.OrdersControllerCancelOrderResponse404>
     * @throws FetchError<409, types.OrdersControllerCancelOrderResponse409>
     * @throws FetchError<500, types.OrdersControllerCancelOrderResponse500>
     */
    SDK.prototype.ordersController_cancelOrder = function (body) {
        return this.core.fetch('/brand-api/v1/orders/cancel', 'post', body);
    };
    /**
     * Get all open positions. Positions are sorted by open timestamp in reverse-chronological
     * order, so that the first position is the most recently opened one.
     *
     * @throws FetchError<400, types.PositionsControllerGetOpenPositionsResponse400>
     * @throws FetchError<403, types.PositionsControllerGetOpenPositionsResponse403>
     */
    SDK.prototype.positionsController_getOpenPositions = function (body) {
        return this.core.fetch('/brand-api/v1/positions/get-open-positions', 'post', body);
    };
    /**
     * Close open position by positionId.
     *
     * @throws FetchError<400, types.PositionsControllerClosePositionResponse400>
     * @throws FetchError<403, types.PositionsControllerClosePositionResponse403>
     * @throws FetchError<404, types.PositionsControllerClosePositionResponse404>
     * @throws FetchError<500, types.PositionsControllerClosePositionResponse500>
     */
    SDK.prototype.positionsController_closePosition = function (body) {
        return this.core.fetch('/brand-api/v1/positions/close', 'post', body);
    };
    /**
     * Get the account statement report for accounts of a brand. If no accountIds are provided,
     * get the report for all accounts of a brand. Optionally, one can filter accounts by
     * account status (e.g. ACTIVE, SUSPENDED, etc.).
     *
     * @throws FetchError<400, types.ReportsControllerGetAccountStatementReportResponse400>
     * @throws FetchError<403, types.ReportsControllerGetAccountStatementReportResponse403>
     */
    SDK.prototype.reportsController_getAccountStatementReport = function (body) {
        return this.core.fetch('/brand-api/v1/reports/account-statement-report', 'post', body);
    };
    /**
     * Get the trades history report for all accounts of a brand.
     *
     * @throws FetchError<400, types.ReportsControllerGetTradesHistoryReportResponse400>
     * @throws FetchError<403, types.ReportsControllerGetTradesHistoryReportResponse403>
     */
    SDK.prototype.reportsController_getTradesHistoryReport = function (body) {
        return this.core.fetch('/brand-api/v1/reports/trades-history-report', 'post', body);
    };
    /**
     * Get the close trades events for a single account. Pagination is cursor based, and the
     * events are sorted in descending order by the close time. The report is limited to 20
     * events per request. If the number of events exceeds 20, the response will contain a
     * cursor to fetch the next page of events. The cursor is a string that should be passed as
     * a query parameter `cursor` in the next request to fetch the next page of events. If the
     * cursor is not provided, the first page of events will be returned containing the most
     * recent events.
     *
     * @throws FetchError<400, types.ReportsControllerGetCloseTradesHistoryReportResponse400>
     * @throws FetchError<403, types.ReportsControllerGetCloseTradesHistoryReportResponse403>
     */
    SDK.prototype.reportsController_getCloseTradesHistoryReport = function (body) {
        return this.core.fetch('/brand-api/v1/reports/close-trades-history-report', 'post', body);
    };
    /**
     * Get the users activities report for all accounts of a brand. Limit is 1000000 items. The
     * range between startDateTime and endDateTime can be a maximum of 30 days. The data
     * fetched by this endpoint is not real-time but is periodically updated at predefined
     * intervals.
     *
     * @throws FetchError<400, types.ReportsControllerGetUsersActivitiesReportResponse400>
     * @throws FetchError<401, types.ReportsControllerGetUsersActivitiesReportResponse401>
     * @throws FetchError<403, types.ReportsControllerGetUsersActivitiesReportResponse403>
     * @throws FetchError<500, types.ReportsControllerGetUsersActivitiesReportResponse500>
     * @throws FetchError<501, types.ReportsControllerGetUsersActivitiesReportResponse501>
     */
    SDK.prototype.reportsController_getUsersActivitiesReport = function (body) {
        return this.core.fetch('/brand-api/v1/reports/users-activities-report', 'post', body);
    };
    /**
     * Retrieves the account operations history for account associated with a brand. Limit is
     * 100000 items. The range between startDateTime and endDateTime can be a maximum of 365
     * days. Optionally, operations can be filtered by operation types (e.g. TRADING, DEPOSIT,
     * WITHDRAW, COMMISSION, SWAP, BLOCKING, UNBLOCKING, ADJUSTMENT, SPREAD, CREDIT,
     * BALANCE_CREDIT).
     *
     * @throws FetchError<400, types.ReportsControllerGetAccountOperationsHistoryResponse400>
     * @throws FetchError<403, types.ReportsControllerGetAccountOperationsHistoryResponse403>
     */
    SDK.prototype.reportsController_getAccountOperationsHistory = function (body) {
        return this.core.fetch('/brand-api/v1/reports/account-operations-history-report', 'post', body);
    };
    /**
     * Get all groups of a brand.
     *
     * @throws FetchError<400, types.GroupsControllerGetGroupsResponse400>
     * @throws FetchError<403, types.GroupsControllerGetGroupsResponse403>
     */
    SDK.prototype.groupsController_getGroups = function (body) {
        return this.core.fetch('/brand-api/v1/groups/all', 'post', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
