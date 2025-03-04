<?php

namespace App\Http\Controllers\Admin; // Namespace ঠিক আছে কিনা চেক করো

use App\Http\Controllers\Controller;
use App\Services\ExchangeRateService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    protected $exchangeRateService;

    public function __construct(ExchangeRateService $exchangeRateService)
    {
        $this->exchangeRateService = $exchangeRateService;
    }

    public function index()
    {
        $rate = $this->exchangeRateService->getRate('USD', 'BDT');

        // return Inertia::render('admin/Dashboard', [
        //     'rate' => $rate,
        // ]);


        return "abc";
    }



    public function present()  {

        return "abc";

    }
}
